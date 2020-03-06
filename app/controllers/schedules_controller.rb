class SchedulesController < ApplicationController
  before_action :login_required

  def index
    @schedule = Schedule.all
  end

  def new
    @schedule = Schedule.new
    @newsche = Schedule.where("date >= ?", Time.zone.now.beginning_of_day).where(user_id: current_user.id).order(starttime: "asc")
    @today = Time.zone.now.strftime("%Y%m%d")
  end

  def create
    Schedule.create(schedule_params)
    redirect_to new_schedule_path
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
    schedule.update(schedule_params)
    redirect_to today_schedules_path
  end

  def destroy
    schedule = Schedule.find(params[:id])
    schedule.destroy
    redirect_to today_schedules_path
  end

  def today
    @schedules = Schedule.where("date >= ?", Time.zone.now.beginning_of_day).where(user_id: current_user.id).order(starttime: "asc")
  end

  def calendar
    @tmp = params[:text]
    @month = @tmp[5..6]
    @day = @tmp[8..9]
    @cale = Schedule.where(date: @tmp).where(user_id: current_user.id).order(starttime: "asc")
  end

  private
    def schedule_params
      params.require(:schedule).permit(:date, :starttime, :finishtime, :tag_id, :title, :description).merge(user_id: current_user.id)
      # .permit(user_id: current_user.id)
    end

end
