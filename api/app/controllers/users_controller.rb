class UsersController < ApplicationController
  before_action :check_create_params, :only => [:create]
  before_action :check_show_params, :only => [:show]
  before_action :check_update_params, :only => [:update]

  def create
    render :json => { 
        message: "Usuário criado com sucesso."
      }, status: 200 and return
  end

  def show
    render :json => { 
        user: {
          id: params[:id],
          name: "John Doe",
          email: "john@doe.com",
          birthday: Time.zone.now - 20.years,
          gender: User.gender.male.value
        }
      }, status: 200 and return
  end

  def update
    render :json => { 
        message: "Usuário alterado com sucesso."
      }, status: 200 and return
  end

  def index
    render :json => {
        users: []
      }, status: 200 and return
  end

  def check_create_params
    if params[:name].blank? || params[:email].blank?
      render :json => { 
        message: "Verifique os dados enviados, pois há campos em branco"
      }, status: 400 and return
    end
  end

  def check_show_params
    render :json => { 
      message: "Verifique os dados enviados, pois há campos em branco" 
    }, status: 400 if params[:id].blank? and return
  end

  def check_update_params
    render :json => { 
      message: "Você não informou qual ID de usuário quer atualizar."
    }, status: 400 and return if params[:id].blank?
    all_fields_are_blank = params[:name].blank? && params[:email].blank? && params[:gender].blank? && params[:birthday].blank?
    render :json => { 
      message: "Você precisa informar ao menos um campo alterado para atualizar o Usuário"
    }, status: 400 and return if all_fields_are_blank
  end

end
