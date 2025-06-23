from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'green_planet_secret_key'

# Language content dictionary
languages = {
    'en': {
        'nav_home': 'Home',
        'nav_about': 'About Earth',
        'nav_features': 'Features',
        'hero_welcome': 'Welcome to',
        'hero_title': 'Green Planet',
        'hero_subtitle': 'Discover the beauty and mystery of Earth - our shared home',
        'btn_explore': 'Explore Now',
        'btn_learn': 'Learn More',
        'stats_age': 'billion years old',
        'stats_ocean': '% ocean coverage',
        'stats_species': 'million species',
        'stats_population': 'billion people',
        'intro_title': 'Earth - The Blue Gem of the Universe',
        'world_examples_title': 'Global Earth Protection Initiatives',
        'highlights_title': 'Earth\'s Mysteries',
        'wisdom_title': 'Natural Philosophy',
        'footer_quote': '"We do not inherit the earth from our ancestors; we borrow it from our children"',
        'footer_author': '- Native American Proverb'
    },
    'ja': {
        'nav_home': 'ホーム',
        'nav_about': '地球について',
        'nav_features': '特徴',
        'hero_welcome': 'ようこそ',
        'hero_title': '緑の惑星へ',
        'hero_subtitle': '地球の美しさと神秘を発見しよう - 私たちの共通の家',
        'btn_explore': '今すぐ探索',
        'btn_learn': '詳しく学ぶ',
        'stats_age': '億年前に誕生',
        'stats_ocean': '% 海洋の割合',
        'stats_species': '万種の生物',
        'stats_population': '億人の人口',
        'intro_title': '地球 - 宇宙の青い宝石',
        'world_examples_title': '世界の地球保護の取り組み',
        'highlights_title': '地球の神秘',
        'wisdom_title': '日本の自然哲学',
        'footer_quote': '「地球は私たちから祖先から受け継いだものではなく、子どもたちから借りているものである」',
        'footer_author': '- ネイティブアメリカンの格言'
    },
    'vi': {
        'nav_home': 'Trang Chủ',
        'nav_about': 'Về Trái Đất',
        'nav_features': 'Đặc Điểm',
        'hero_welcome': 'Chào Mừng Đến Với',
        'hero_title': 'Hành Tinh Xanh',
        'hero_subtitle': 'Khám phá vẻ đẹp và sự kỳ diệu của Trái Đất - ngôi nhà chung của chúng ta',
        'btn_explore': 'Khám Phá Ngay',
        'btn_learn': 'Tìm Hiểu Thêm',
        'stats_age': 'tỷ năm tuổi',
        'stats_ocean': '% bề mặt là nước',
        'stats_species': 'triệu loài sinh vật',
        'stats_population': 'tỷ dân số',
        'intro_title': 'Trái Đất - Viên Ngọc Xanh Của Vũ Trụ',
        'world_examples_title': 'Các Sáng Kiến Bảo Vệ Trái Đất Toàn Cầu',
        'highlights_title': 'Những Điều Kỳ Diệu Của Trái Đất',
        'wisdom_title': 'Triết Lý Tự Nhiên',
        'footer_quote': '"Chúng ta không thừa hưởng trái đất từ tổ tiên mà mượn nó từ con cháu"',
        'footer_author': '- Câu ngạn ngữ của người bản địa Mỹ'
    }
}

@app.route('/set_language/<language>')
def set_language(language):
    if language in languages:
        session['language'] = language
    return redirect(request.referrer or url_for('home'))

@app.route('/')
def home():
    lang = session.get('language', 'en')
    return render_template('index.html', lang=lang, text=languages[lang])

@app.route('/about')
def about():
    lang = session.get('language', 'en')
    return render_template('about.html', lang=lang, text=languages[lang])

@app.route('/features')
def features():
    lang = session.get('language', 'en')
    return render_template('features.html', lang=lang, text=languages[lang])

if __name__ == '__main__':
    app.run(debug=True)
