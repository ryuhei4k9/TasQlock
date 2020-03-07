class SchedulesController < ApplicationController
  before_action :login_required

  def index
  end

  def new
    @schedule = Schedule.new
    @newsche = Schedule.where("date >= ?", Time.zone.now.beginning_of_day).where(user_id: current_user.id).order(starttime: "asc")
    @today = Time.zone.now.strftime("%Y%m%d")
  end

  def create
    schedule = Schedule.new(schedule_params)
      if schedule.valid?
        schedule.save
        flash[:notice] = "スケジュールを登録しました"
        redirect_to new_schedule_path
      else
        flash[:alert] = "必須項目を入力して下さい"
        redirect_to new_schedule_path
      end
  end

  def show
  end

  def edit
    @schedule = Schedule.find(params[:id])
    @starttime = @schedule.starttime.strftime("%H:%M")
    @finishtime = @schedule.finishtime.strftime("%H:%M")
    @newsche = Schedule.where("date >= ?", Time.zone.now.beginning_of_day).where(user_id: current_user.id).order(starttime: "asc")
  end

  def update
    schedule = Schedule.find(params[:id])
      if schedule.valid?
        schedule.update(schedule_params)
        redirect_to today_schedules_path
        flash[:notice] = "スケジュールを編集しました"
      else
        redirect_to edit_schedule_path
        flash[:alert] = "必須項目を入力して下さい"
      end
  end

  def destroy
    schedule = Schedule.find(params[:id])
    schedule.destroy
    flash[:notice] = "スケジュールを削除しました"
    redirect_to today_schedules_path
  end

  def today
    @schedules = Schedule.where("date >= ?", Time.zone.now.beginning_of_day).where(user_id: current_user.id).order(starttime: "asc")
    @memo = Memo.new
    @memos = Memo.where("date >= ?", Time.zone.now.beginning_of_day).where(user_id: current_user.id).order(created_at: "asc")
  end

  def calendar
    @tmp = params[:text]
    @month = @tmp[5..6]
    @day = @tmp[8..9]
    @cale = Schedule.where(date: @tmp).where(user_id: current_user.id).order(starttime: "asc")
    @memos = Memo.where(date: @tmp).where(user_id: current_user.id).order(created_at: "asc")
  end

  def done
    schedule = Schedule.find(params[:id])
    schedule.update(done: 1)
    redirect_to today_schedules_path
    flash[:notice] = "スケジュールが完了しました"
  end

  private
    def schedule_params
      params.require(:schedule).permit(:date, :starttime, :finishtime, :done, :tag_id, :title, :description).merge(user_id: current_user.id)
    end

end
