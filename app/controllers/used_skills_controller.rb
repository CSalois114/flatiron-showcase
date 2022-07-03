class UsedSkillsController < ApplicationController
  before_action :set_used_skill, only: %i[ show update destroy ]

  # GET /used_skills
  def index
    @used_skills = UsedSkill.all

    render json: @used_skills
  end

  # GET /used_skills/1
  def show
    render json: @used_skill
  end

  # POST /used_skills
  def create
    @used_skill = UsedSkill.new(used_skill_params)

    if @used_skill.save
      render json: @used_skill, status: :created, location: @used_skill
    else
      render json: @used_skill.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /used_skills/1
  def update
    if @used_skill.update(used_skill_params)
      render json: @used_skill
    else
      render json: @used_skill.errors, status: :unprocessable_entity
    end
  end

  # DELETE /used_skills/1
  def destroy
    @used_skill.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_used_skill
      @used_skill = UsedSkill.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def used_skill_params
      params.require(:used_skill).permit(:showcase_id, :skill_id)
    end
end
