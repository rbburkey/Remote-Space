class Notifier < ApplicationMailer
  def sign_up_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome to RemoteSpace")
  end

  def sign_up_email_notification(user)
    @user = user
    mail(to: "robinson@remotespace.co", subject: "New User Has Signed Up!")
  end

  def subscription_email(user)
    @user = user
    mail(to: @user.email, subject: "Thanks for signing up!")
  end

  def subscription_email_notification(user)
    @user = user
    mail(to: "robinson@remotespace.co", subject: "New Subscriber!")
  end

  def contact_email(user)
    @user = user
    mail(to: @user.email, subject: "We have received your message!")
  end

  def contact_email_notification(user)
    @user = user
    mail(to: "robinson@remotespace.co", subject: @user.subject)
  end

  def new_space_email(space)
    @user = User.where(id: space.user_id).first
    mail(to: @user.email, subject: "Thank you for adding a Space!")
  end

  def new_space_email_notification(space)
    @space = space
    mail(to: "robinson@remotespace.co", subject: "New Remote Space Added!")
  end

end
