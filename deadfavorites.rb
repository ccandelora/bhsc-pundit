require 'net/http'
require 'uri'
require 'csv'

ids =[]

UserFavorite.each do |fav|

	case fav.site
	when 'atk'
		domain = 'http://www.americastestkitchen.com/'
	when 'cio'
		domain = 'http://www.cooksillustrated.com/'
	when 'cco'
		domain = 'http://www.cookscountry.com/'
	end

	case fav.favoritable_sti_type
	when 'Recipe'
		slug = Recipe.find(fav.favoritable_id)
		url = domain + '/recipes/' + fav.favoritable_id + '-' + slug.slug
	when 'Video'
		slug = Video.find(fav.favoritable_id)
		url = domain + '/videos/' + fav.favoritable_id + '-' + slug.slug
	when 'ReviewSet::EquipmentReview'
		slug = ReviewSet.find(fav.favoritable_id)
		url = domain + '/equipment_reviews/' + fav.favoritable_id + '-' + slug.slug
	when 'ReviewSet::TasteTest'
		slug = ReviewSet.find(fav.favoritable_id)
		url = domain + '/taste_tests/' + fav.favoritable_id + '-' + slug.slug
	when 'Page::HowTo'
		slug = Page.find(fav.favoritable_id)
		url = domain + '/how_tos/' + fav.favoritable_id + '-' + slug.slug
	when 'Episode'
		slug = Episode.find(fav.favoritable_id)
		url = domain + '/episodes/' + fav.favoritable_id + '-' + slug.slug
	when 'Page::FeaturedContent'
		slug = Page.find(fav.favoritable_id)
		url = domain + '/features/' + fav.favoritable_id + '-' + slug.slug
	when 'Page::Science'
		slug = Page.find(fav.favoritable_id)
		url = domain + '/science/' + fav.favoritable_id + '-' + slug.slug
	when 'RadioProgram'
		slug = RadioProgram.find(fav.favoritable_id)
		url = domain + '/radio/' + fav.favoritable_id + '-' + slug.slug
	end

	uri = URI.parse(url)

	http = Net::HTTP.new(uri.host, uri.port)
	request = Net::HTTP::Get.new(uri.request_uri)

	response = http.request(request)

	if response.code >= 400
		ids.push(fav.favoritable_id)
	end
end

CSV.open('dead_favorites.csv', 'w') do |csv|
	csv << ['id']
	ids.each do |id|
		csv.puts id
	end
end