class Api::ApplicationController < ApplicationController
  
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  
  private

  def current_user
    if session[:user_id].present?
      @current_user ||= User.find(session[:user_id])
    end
  end

  def user_signed_in?
    current_user.present?
  end

  def authenticate_user!
    unless user_signed_in?
      render(json: { errors: ["Unauthorized"] }, status: 401)
    end
  end

  def record_invalid(error)
    record = error.record
    errors = record.errors.map do |field, message|
      {
        type: error.class.to_s,
        record_type: record.class.to_s,
        field: field,
        message: message
      }
    end
    
    render(
      status: 422, # Unprocessable Entity
      json: {
        status: 422,
        errors: errors
      }
    )
  end

  def standard_error(error)

    logger.error error.full_message

    render(
      status: 500,
      json: {
        status: 500,
        errors: [{
          type: error.class.to_s,
          message: error.message
        }]
      }
    )
  end

end
