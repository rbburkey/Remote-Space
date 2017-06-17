class Contact < ActiveRecord::Base
  after_create :send_contact_mail, :send_contact_mail_notification
  def send_contact_mail
    Notifier.contact_email(self).deliver
  end

  def send_contact_mail_notification
    Notifier.contact_email_notification(self).deliver
  end
end
