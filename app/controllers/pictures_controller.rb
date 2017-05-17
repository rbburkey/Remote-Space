class PicturesController < ApplicationController
  before_action :set_space
  def new
    @picture = Picture.new(space: @space)
  end

  def index
    @pictures = Picture.all
  end

  def show
    @picture = Picture.where(space_id: @space)
  end

  def create
    @picture = Picture.new(picture_params)
    @picture.space = @space
    @picture.user_id = current_user.id
    respond_to do |format|
      if @picture.save
        format.html { redirect_to @space, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @space }
      else
        format.html { render :new }
        format.json { render json: @space.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_picture
      @picture = Picture.find(params[:id])
    end

    def set_space
      @space = Space.find(params[:space_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def picture_params
      params.require(:picture).permit(:image, :space_id, :user_id)
    end
end
