module ApplicationHelper

  def display_base_errors resource
    return '' if (resource.errors.empty?) or (resource.errors[:base].empty?)
    messages = resource.errors[:base].map { |msg| content_tag(:p, msg) }.join
    html = <<-HTML
    <div class="alert alert-error alert-block">
      <button type="button" class="close" data-dismiss="alert">&#215;</button>
      #{messages}
    </div>
    HTML
    html.html_safe
  end

  def randomized_background_image
    images = ['bretts.jpg', 'fronthouse.jpg', 'hike_2.jpeg', 'mt_wash_from_bwoods.jpg', 'hike.jpeg', 'house.jpeg', 'mt_washington.jpg', 'summit_sign.jpg', 'tubing.jpg', 'tucks_2.jpeg', 'tucks_3.jpg', 'tucks.jpg', 'ullr.jpeg']
    images[rand(images.size)]
  end

end
