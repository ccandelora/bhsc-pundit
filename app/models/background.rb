class Background < OpenStruct

  # OpenStructs don't convert to json very well,
  # so we convert to hash first
  delegate :to_json, :as_json, to: :to_h

  def initialize(*args)
    super
    self.slug = ActiveSupport::StringInquirer.new(self.slug.to_s)
    self.class.delegate "#{self.slug}?", to: :slug
  end

  def self.find(slug)
    all.detect{|background| background.slug == slug.to_s}
  end

  def self.all
    ALL_BACKGROUNDS
  end
end
