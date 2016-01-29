
class Api::UsersController < ApplicationController
  def index
    render json: User.all.to_json
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  # def create
  #   user = User.new(user_params)
  #   if user.save
  #     render json: user
  #   else
  #     render json: { errors: user.errors.full_messages }, status: 422
  #   end
  # end
  private
  def user_params
    params.require(:user).permit(:username, :password, :description, :avatar)
  end
end
