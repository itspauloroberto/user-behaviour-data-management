class UsersController < ApplicationController
  before_action :check_create_params, :only => [:create]
  before_action :check_show_params, :only => [:show]
  before_action :check_update_params, :only => [:update]

  def create
    created_user = ::User::CreateService.new(:params => params).call

    render :json => { 
      message: "Usuário criado com sucesso."
    }, status: 200 and return if created_user.valid?

    render :json => { 
      message: created_user.errors.full_messages
    }, status: 400 and return
  end

  def show
    found_user = ::User::ShowService.new(:params => params).call
    render :json => { 
      message: "Não foi possível encontrar um Usuário com este ID."
    }, status: 400 and return if found_user.nil?
    render :json => UserShowSerializer.new(found_user).to_json, status: 200 and return
  end

  def update
    update_user = ::User::UpdateService.new(:params => params).call
    render :json => {
      message: "Não foi possível alterar os dados deste Usuário."
    }, status: 400 and return if update_user.nil?
    render :json => { message: "Dados alterados com sucesso." }, status: 200 and return
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
