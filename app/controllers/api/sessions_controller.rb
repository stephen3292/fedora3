class Api::SessionsController < ApplicationController

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      render json: {}
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.nil?
      render json: ["Wrong username/password combo!"], status: 401
    else
      sign_in!(@user)
      render "api/users/show"
    end
  end

  def destroy
    @user = current_user
    sign_out!
    render "api/users/show"
  end


end
