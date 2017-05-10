class SpacesController < ApplicationController
  before_action :authenticate_user!, only: [:create, :new]
  before_action :set_space, only: [:show, :edit, :update, :destroy]

  # GET /spaces
  # GET /spaces.json
  def index
    @page = (params[:page] || 1).to_i
    offset = (@page -1) * 6
    @spaces = Space.
    order(created_at: :desc).
    offset(offset).
    limit(6).
    all

    @reviews = Review.where(space_id: @space)
    if @reviews.blank?
      @avg_rating = 0
    else
      @avg_rating = @reviews.average(:rating).round(2)
    end

    @hash = Gmaps4rails.build_markers(@spaces) do |space, marker|
      marker.lat space.latitude
      marker.lng space.longitude
      marker.json({:id => space.id })
      marker.infowindow render_to_string(:partial => "/spaces/infowindow", :locals => { :object => space})
    end
  end

  # GET /spaces/1
  # GET /spaces/1.json
  def show
    @space = Space.find(params[:id])
    @reviews = Review.where(space_id: @space)
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


  # GET /spaces/new
  def new
    @space = Space.new
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
    @page = (params[:page] || 1).to_i
    offset = (@page -1) * 6
    @spaces = Space.
    search(params).
    order(created_at: :desc).
    offset(offset).
    limit(6).
    all
  end

  def my_spaces
    @spaces = Space.where(user_id: current_user.id)
  end

  def favorites
    @spaces = current_user.favorites
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
      params.require(:space).permit(:name, :category_id, :description, :address1, :address2, :city, :state, :zipcode, :phone, :website, :facebook_url, :twitter_url, :instagram_url, :image, feature:[])
    end
end
