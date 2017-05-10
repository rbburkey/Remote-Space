ActionMailer::Base.smtp_settings =  {
:address              => 'smtp.gmail.com',
:port                 =>  587,
:domain               => 'remotespace.co',
:user_name            => 'robinson@remotespace.co',
:password             => 'n00776857rb',
:authentication       => :plain,
:enable_starttls_auto => true
}
