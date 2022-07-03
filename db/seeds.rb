# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts "started seeding"

require 'faker'

medium_articles = [
  "https://medium.com/@csalois/illusions-of-a-third-dimension-be1144053677",
  "https://medium.com/@csalois/polling-position-of-animated-elements-74781f879582",
  "https://medium.com/@csalois/when-in-doubt-clone-it-out-7264174899a3"
]

youtube_videos = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=1Q39yGLPkMY",
  "https://www.youtube.com/watch?v=cd4-UnU8lWY"
]

github_repository = [
  "https://github.com/CSalois114/portfolio-website",
  "https://github.com/CSalois114/flatiron-showcase",
  "https://github.com/CSalois114/react-typing-game"
]

20.times do 
  Skill.find_or_create_by!(name: Faker::Hacker.adjective)
end
skills = Skill.all

20.times do 
  user = User.create!(
    first_name: Faker::Name.first_name,
    last_name:  Faker::Name.last_name
  )

  user_info = UserInfo.create!(
    user: user,
    email: "fake@fake.com",
    location: "#{Faker::Address.city}, #{Faker::Address.state}, US",
    phone_number: Faker::Number.number(digits: 10),
    about_me: Faker::Hipster.paragraph
  )

  SocialLink.create!(
    user_info: user_info,
    name: "Github",
    url: "https://github.com/CSalois114"
  )

  SocialLink.create!(
    user_info: user_info,
    name: "Medium",
    url: "https://medium.com/@csalois"
  )

  rand(3..10).times do |i|
    kind = ["project", "blog"].sample
    is_project = kind == "project"

    showcase = Showcase.create!(
      user: user,
      name: is_project ? Faker::App.name : Faker::Hipster.sentence(word_count: rand(2..4)),
      description: Faker::Hacker.say_something_smart,
      url: is_project ? ["https://csalois114.github.io/portfolio-website/", nil].sample : medium_articles.sample,
      kind: kind,
      order: i
    )

    5.times do
      UsedSkill.create!(
        showcase: showcase,
        skill: skills.sample
      )
    end

    if is_project
      rand(1..2).times do
        Repository.create!(
          showcase: showcase,
          name: ["Front End", "Back End", "Full Stack"].sample,
          url: github_repository.sample
        )
      end
      rand(0..2).times do
        Video.create!(
          showcase: showcase,
          name: ["#{showcase.name} Demo", "Code Walkthrough"].sample,
          url: youtube_videos.sample
        )
      end
      rand(0..4).times do
        partner = User.all.sample

        Partner.create!(
          showcase: showcase,
          user: partner,
          name: partner ? "#{partner.first_name} #{partner.last_name}" : Faker::Name.name
        )
      end
    end
  end
end

puts "seeding complete"
