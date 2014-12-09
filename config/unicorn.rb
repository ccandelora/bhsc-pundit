worker_processes Integer(ENV['UNICORN_CONCURRENCY'] || 3)
timeout 30
preload_app true

before_fork do |server, worker|
  Signal.trap 'TERM' do
    puts 'Unicorn master intercepting TERM and sending myself QUIT instead'
    Process.kill 'QUIT', Process.pid
  end

  if defined?(ActiveRecord::Base)
    ActiveRecord::Base.connection.disconnect!
    Sherpa::Base.connection.disconnect!
  end

end

after_fork do |server, worker|
  Signal.trap 'TERM' do
    puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to send QUIT'
  end

  reaping_frequency = ENV['DB_REAP_FREQ'] || 10 # seconds
  pool = ENV['DB_POOL'] || 16

  if defined?(ActiveRecord::Base)
    config = Rails.application.config.database_configuration[Rails.env]
    config['reaping_frequency'] = reaping_frequency
    config['pool'] = pool
    ActiveRecord::Base.establish_connection(config)
  end

  if defined?(Sherpa::Base) && database_url = Rails.application.config.treasure_database_url
    Sherpa::Base.establish_connection("#{database_url}?pool=#{pool}&reaping_frequency=#{reaping_frequency}")
  end
end