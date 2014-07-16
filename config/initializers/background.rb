ALL_BACKGROUNDS = YAML.load_file(Rails.root.join('config', 'backgrounds.yml')).map do |sweep|
  Background.new(background)
end