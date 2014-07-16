class BackgroundsDetector
  attr_reader :background
  def initialize(request_background)
    @request_background = request_background.to_s
    @background = detect
  end

  private

  def detect
    Backgrooung.all.detect { |background|
      background.slug.include?(@request_background)
    }
  end
end