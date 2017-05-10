class NewUserEmail < ApplicationMailer
  def sign_up_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome to RemoteSpace")
  end
end
