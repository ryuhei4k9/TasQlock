class MemosController < ApplicationController
  def index
    @memos = Memo.find_by("created_at >= ?", Time.zone.now.beginning_of_day).where(user_id: current_user.id).order(created_at: "asc")
  end

  def new
    @memo = Memo.new(memo_params)
  end

  def create
    @memo = Memo.new(memo_params)
    @memo.date = Time.now.to_s.slice(0..9)
    @memo.save
      # if memo.save
      #   respond to html
      #   respond to json
    redirect_to today_schedules_path
  end

  def destroy
    @memo = Memo.find(params[:id])
    @memo.destroy
    redirect_to today_schedules_path
  end

  private
  def memo_params
    params.require(:memo).permit(:memo, :date).merge(user_id: current_user.id)
  end
end
