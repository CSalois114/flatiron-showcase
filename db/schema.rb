# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_06_180657) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "partners", force: :cascade do |t|
    t.bigint "showcase_id", null: false
    t.bigint "user_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["showcase_id"], name: "index_partners_on_showcase_id"
    t.index ["user_id"], name: "index_partners_on_user_id"
  end

  create_table "repositories", force: :cascade do |t|
    t.bigint "showcase_id", null: false
    t.string "name"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["showcase_id"], name: "index_repositories_on_showcase_id"
  end

  create_table "showcases", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.text "description"
    t.string "url"
    t.string "kind"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_showcases_on_user_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "social_links", force: :cascade do |t|
    t.bigint "user_info_id", null: false
    t.string "name"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_info_id"], name: "index_social_links_on_user_info_id"
  end

  create_table "used_skills", force: :cascade do |t|
    t.bigint "showcase_id", null: false
    t.bigint "skill_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["showcase_id"], name: "index_used_skills_on_showcase_id"
    t.index ["skill_id"], name: "index_used_skills_on_skill_id"
  end

  create_table "user_infos", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "email"
    t.bigint "phone_number"
    t.string "location"
    t.text "about_me"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_infos_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "videos", force: :cascade do |t|
    t.bigint "showcase_id", null: false
    t.string "name"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["showcase_id"], name: "index_videos_on_showcase_id"
  end

  add_foreign_key "partners", "showcases"
  add_foreign_key "partners", "users"
  add_foreign_key "repositories", "showcases"
  add_foreign_key "showcases", "users"
  add_foreign_key "social_links", "user_infos"
  add_foreign_key "used_skills", "showcases"
  add_foreign_key "used_skills", "skills"
  add_foreign_key "user_infos", "users"
  add_foreign_key "videos", "showcases"
end
