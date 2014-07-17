class BackgroundsDetector
  attr_reader :background
  def initialize(request_background)
    @request_background = request_background.to_s
    @background = detect
  end

  private

  def detect
    Background.all.detect { |background|
      binding.pry
      background.bg.order("RAND()").first
      #background.slug.include?(@request_background)
    }
  end
end