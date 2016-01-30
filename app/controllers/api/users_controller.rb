
class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
    render json: User.all.to_json
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :description, :avatar)
  end
end
