class SessionsController < ApplicationController

  def create
    user = User.find_by(email: session_params[:email], name: session_params[:name])
    if user&.authenticate(session_params[:password])
      session[:user_id] = user.id
      redirect_to today_schedules_path # 当日スケジュール一覧画面にリダイレクト
    else
      redirect_to root_path
    end
  end

  def destroy
    reset_session
    redirect_to root_path
  end
      
  private
  def session_params
    params.require(:session).permit(:name, :email, :password)
  end

end