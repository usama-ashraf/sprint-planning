class Api::V1::TicketsController < Api::ApiController
  before_action :set_ticket, only: [:show, :destroy]
  def index
    if params[:id].present?
      tickets = Ticket.where(sprint_id: params[:id]).order(created_at: :desc) 
      sprint_name = Sprint.find_by(id: params[:id])&.name 
    else
      tickets = Ticket.all.order(created_at: :desc)
      sprint_name = nil
    end
    return render json: {
      tickets: ActiveModelSerializers::SerializableResource.new(tickets, each_serializer: TicketSerializer ),
      success: "true",
      sprint_name: sprint_name
    } 
  end

  def create
    binding.pry
    ticket = Ticket.create!(ticket_params)
    return render json: {
      ticket: ActiveModelSerializers::SerializableResource.new(ticket, each_serializer: TicketSerializer ),
      success: "true"
    }  if ticket
    render status: 422,
      json:{
      errors: ticket.errors,
      success: "false"
    } 
  end


  private
  def ticket_params
    params.require(:data).permit(:name, :description, :sprint_id)
  end
  def set_ticket
    @recipe = Recipe.find_by(id: params[:id])
  end
  
end
