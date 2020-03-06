class HomesController < ApplicationController

  def index
    if user_signed_in?
      redirect_to today_schedules_path
    else
      @user = User.new
    end
  end

  # private
    
  #   def set_user
  #     @user = User.find_by!(email: session_params[:email])
  #   rescue
  #     flash.now[:danger] = t('.flash.invalid_mail')
  #     render action: 'index'
  #   end
end
