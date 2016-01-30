# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  description     :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#

class UsersController < ApplicationController

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

  private
  def user_params
    params.require(:user).permit(:username, :password, :description, :avatar)
  end

end
