import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  location: string;
  photographer?: string;
}

export default function Gallery() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: language === 'en' ? 'All' : language === 'ja' ? 'すべて' : 'Tất cả' },
    { id: 'landscapes', name: language === 'en' ? 'Landscapes' : language === 'ja' ? '風景' : 'Cảnh quan' },
    { id: 'oceans', name: language === 'en' ? 'Oceans' : language === 'ja' ? '海洋' : 'Đại dương' },
    { id: 'forests', name: language === 'en' ? 'Forests' : language === 'ja' ? '森林' : 'Rừng' },
    { id: 'wildlife', name: language === 'en' ? 'Wildlife' : language === 'ja' ? '野生動物' : 'Động vật hoang dã' },
    { id: 'climate', name: language === 'en' ? 'Climate' : language === 'ja' ? '気候' : 'Khí hậu' },
  ];

  // Sample gallery data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: language === 'en' ? 'Aurora Borealis' : language === 'ja' ? 'オーロラ' : 'Cực quang',
      category: 'climate',
      description: language === 'en' 
        ? 'Stunning northern lights dancing across the Arctic sky'
        : language === 'ja'
        ? '北極の空に踊る美しいオーロラ'
        : 'Ánh sáng phương bắc tuyệt đẹp nhảy múa trên bầu trời Bắc Cực',
      imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
      location: 'Iceland',
      photographer: 'Nature Photo Co.'
    },
    {
      id: 2,
      title: language === 'en' ? 'Amazon Rainforest' : language === 'ja' ? 'アマゾン雨林' : 'Rừng mưa Amazon',
      category: 'forests',
      description: language === 'en'
        ? 'The lungs of our planet, home to incredible biodiversity'
        : language === 'ja'
        ? '地球の肺、信じられないほどの生物多様性の故郷'
        : 'Lá phổi của hành tinh, nơi có sự đa dạng sinh học đáng kinh ngạc',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      location: 'Brazil',
      photographer: 'Earth Explorers'
    },
    {
      id: 3,
      title: language === 'en' ? 'Coral Reef' : language === 'ja' ? 'サンゴ礁' : 'Rạn san hô',
      category: 'oceans',
      description: language === 'en'
        ? 'Vibrant underwater ecosystems teeming with marine life'
        : language === 'ja'
        ? '海洋生物に満ちた活気ある水中生態系'
        : 'Hệ sinh thái dưới nước sống động với cuộc sống biển phong phú',
      imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      location: 'Great Barrier Reef',
      photographer: 'Ocean Lens'
    },
    {
      id: 4,
      title: language === 'en' ? 'Mountain Range' : language === 'ja' ? '山脈' : 'Dãy núi',
      category: 'landscapes',
      description: language === 'en'
        ? 'Majestic peaks reaching towards the sky'
        : language === 'ja'
        ? '空に向かって伸びる雄大な峰々'
        : 'Những đỉnh núi hùng vĩ vươn lên trời',
      imageUrl: 'https://images.unsplash.com/photo-1464822759844-d150baec4ba5?w=800&h=600&fit=crop',
      location: 'Swiss Alps',
      photographer: 'Mountain Vision'
    },
    {
      id: 5,
      title: language === 'en' ? 'Arctic Fox' : language === 'ja' ? 'ホッキョクギツネ' : 'Cáo Bắc Cực',
      category: 'wildlife',
      description: language === 'en'
        ? 'Resilient creatures adapted to extreme cold environments'
        : language === 'ja'
        ? '極寒環境に適応した回復力のある生き物'
        : 'Sinh vật có sức chống chịu thích ứng với môi trường lạnh giá',
      imageUrl: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=800&h=600&fit=crop',
      location: 'Arctic Circle',
      photographer: 'Wildlife Pro'
    },
    {
      id: 6,
      title: language === 'en' ? 'Tropical Beach' : language === 'ja' ? 'トロピカルビーチ' : 'Bãi biển nhiệt đới',
      category: 'oceans',
      description: language === 'en'
        ? 'Crystal clear waters and pristine sandy beaches'
        : language === 'ja'
        ? '透明な水と手つかずの砂浜'
        : 'Nước trong vắt và bãi cát nguyên sơ',
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      location: 'Maldives',
      photographer: 'Tropical Shots'
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-900/90 via-green-900/90 to-emerald-900/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              {language === 'en' ? 'Earth\'s Gallery' : language === 'ja' ? '地球のギャラリー' : 'Thư viện Trái Đất'}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 text-balance">
              {language === 'en'
                ? 'Discover the breathtaking beauty of our planet through stunning photography'
                : language === 'ja'
                ? '素晴らしい写真を通して私たちの惑星の息をのむような美しさを発見する'
                : 'Khám phá vẻ đẹp ngoạn mục của hành tinh chúng ta qua những bức ảnh tuyệt đẹp'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-16 z-40 border-b border-white/20">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-emerald-500 text-white shadow-lg'
                    : 'bg-white/70 text-slate-700 hover:bg-white/90 border border-white/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="card p-0 overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-2">📍 {item.location}</p>
                      <p className="text-sm opacity-80 line-clamp-2">{item.description}</p>
                      {item.photographer && (
                        <p className="text-xs opacity-70 mt-1">📸 {item.photographer}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 