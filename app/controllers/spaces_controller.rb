class SpacesController < ApplicationController
  before_action :authenticate_user!, only: [:create, :new, :index, :show, :my_spaces, :favorites]
  before_action :set_space, only: [:show, :edit, :update, :destroy]

  # GET /spaces
  # GET /spaces.json
  def index
    @spaces = Space.all.paginate(:page => params[:page], :per_page => 6)
    @reviews = Review.where(space_id: @space)
    if @reviews.blank?
      @avg_rating = 0
    else
      @avg_rating = @reviews.average(:rating).round(2)
    end

    @hash = Gmaps4rails.build_markers(@spaces) do |space, marker|
     marker.lat space.latitude
     marker.lng space.longitude
     marker.infowindow render_to_string(:partial => "/spaces/infowindow", :locals => { :object => space})
   end
  end


  def show
    @space = Space.find(params[:id])
    if @space.approved? == false
      redirect_to pending_path
    end
    @reviews = Review.where(space_id: @space)
    @picture = Picture.where(space_id: @space)

    if @reviews.blank?
      @avg_rating = 0
    else
      @avg_rating = @reviews.average(:rating).round(2)
    end

    @features = @space.feature.split(',')

    @hash = Gmaps4rails.build_markers(@space) do |space, marker|
     marker.lat space.latitude
     marker.lng space.longitude

    end
  end


  def new
    @space = Space.new
  end


  def map
    @spaces = Space.all
  end

  # GET /spaces/1/edit
  def edit
  end

  # POST /spaces
  # POST /spaces.json
  def create
    @space = Space.new(space_params)
    @space.user_id = current_user.id
    respond_to do |format|
      if @space.save
        format.html { redirect_to @space, notice: 'Space was successfully created.' }
        format.json { render :show, status: :created, location: @space }
      else
        format.html { render :new }
        format.json { render json: @space.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /spaces/1
  # PATCH/PUT /spaces/1.json
  def update
    respond_to do |format|
      if @space.update(space_params)
        format.html { redirect_to @space, notice: 'Space was successfully updated.' }
        format.json { render :show, status: :ok, location: @space }
      else
        format.html { render :edit }
        format.json { render json: @space.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /spaces/1
  # DELETE /spaces/1.json
  def destroy
    @space.destroy
    respond_to do |format|
      format.html { redirect_to spaces_url, notice: 'Space was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def search
    @spaces = Space.search(params).paginate(:page => params[:page], :per_page => 6)
    @hash = Gmaps4rails.build_markers(@spaces) do |space, marker|
      marker.lat space.latitude
      marker.lng space.longitude
      marker.json({:id => space.id })
      marker.infowindow render_to_string(:partial => "/spaces/infowindow", :locals => { :object => space})
    end
  end

  def my_spaces
    @spaces = Space.where(user_id: current_user.id).paginate(:page => params[:page], :per_page => 5)
  end

  def favorites
    @spaces = current_user.favorites.paginate(:page => params[:page], :per_page => 5)
  end

  def favorite
      type = params[:type]
      @space = Space.find(params[:id])
      if type == "favorite"
        current_user.favorites << @space
        redirect_to :back, notice: 'Added to your Favorites!'

      elsif type == "unfavorite"
        current_user.favorites.delete(@space)
        redirect_to :back, notice: 'Removed from your Favorites!'

      else
        # Type missing, nothing happens
        redirect_to :back, notice: 'Nothing happened.'
      end
    end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_space
      @space = Space.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def space_params
      params.require(:space).permit(:name, :category_id, :user_id, :description, :address1, :address2, :city, :state, :zipcode, :phone, :website, :facebook_url, :twitter_url, :instagram_url, :image, feature:[])
    end
end
