# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
9.times do |i|
    sprint = Sprint.create(
      name: "Sprint #{i + 1}",
      start_date: Time.now + i.days,
      end_date: Time.now + (i+2).days,
    )
    4.times do |i|
      Ticket.create(
        name: "Ticket-#{i + 1} sprint-#{sprint.id}",
        description: "testing",
        sprint_id: sprint.id
      )
  end
end