class Subscriber < ActiveRecord::Base
after_create :send_subscription_mail
 def send_subscription_mail
   Notifier.subscription_email(self).deliver
 end
end
