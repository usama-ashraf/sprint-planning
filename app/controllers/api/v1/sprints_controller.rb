class Api::V1::SprintsController < Api::ApiController
  before_action :set_recipe, only: [:show, :destroy]
  def index
    sprints = Sprint.all.order(created_at: :desc)
    return render json: {
      sprints: ActiveModelSerializers::SerializableResource.new(sprints, each_serializer: SprintSerializer ),
      success: "true"
    } 
  end

  def create
    sprint = Sprint.create!(sprint_params)
    return render json: {
      sprint: ActiveModelSerializers::SerializableResource.new(sprint, each_serializer: SprintSerializer ),
      success: "true"
    }  if sprint
    render status: 422,
      json:{
      errors: sprint.errors,
      success: "false"
    } 
  end
 
  def select_options
    options = Sprint.all.select(:id, :name)
    render json: {
      options: options
    }
  end

  private
  def sprint_params
    params.require(:data).permit(:name, :start_date, :end_date)
  end
  def set_recipe
    @recipe = Recipe.find_by(id: params[:id])
  end
end
