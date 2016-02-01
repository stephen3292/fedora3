
class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create

    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
    @users = User.all
    render :index
  end

  def show
    # @user = User.includes(:username, :description, :questions).find(params[:id])
    user = User.find(params[:id])
    render json: {}
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :description, :avatar)
  end
end
