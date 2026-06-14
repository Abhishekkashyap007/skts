'use client';
import { useState } from 'react';

const tags = [
  { emoji: '⏰', text: 'On-time Delivery', category: 'positive' },
  { emoji: '🔒', text: 'Safe Transport', category: 'positive' },
  { emoji: '👍', text: 'Good Behavior', category: 'positive' },
  { emoji: '💰', text: 'Fair Pricing', category: 'positive' },
  { emoji: '📞', text: 'Quick Response', category: 'positive' },
  { emoji: '🚛', text: 'Good Condition Truck', category: 'positive' },
  { emoji: '😐', text: 'Average Service', category: 'neutral' },
  { emoji: '⏳', text: 'Delayed Delivery', category: 'negative' },
];

export default function ReviewSection() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [reviewText, setReviewText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: ''
  });

  const toggleTag = (tagText: string) => {
    setSelectedTags(prev => 
      prev.includes(tagText) 
        ? prev.filter(t => t !== tagText)
        : [...prev, tagText]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert('कृपया rating दें!');
      return;
    }

    const message = `🌟 *New Review for SKTS Transport!*%0A%0A` +
      `⭐ *Rating:* ${rating}/5 ${'★'.repeat(rating)}${'☆'.repeat(5-rating)}%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `📍 *City:* ${formData.city}%0A` +
      `🚛 *Service:* ${formData.service}%0A%0A` +
      `💬 *Highlights:*%0A${selectedTags.map(t => '• ' + t).join('%0A')}%0A%0A` +
      `📝 *Detailed Review:*%0A${reviewText}`;
    
    window.open(`https://wa.me/919410461549?text=${message}`, '_blank');
    
    // Reset
    setRating(0);
    setSelectedTags([]);
    setReviewText('');
    setFormData({ name: '', phone: '', city: '', service: '' });
    alert('धन्यवाद! आपका review WhatsApp पर भेज दिया गया है।');
  };

  return (
    <div style={{ 
      background: 'white', 
      padding: '40px 32px', 
      borderRadius: 16, 
      boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
      maxWidth: 700,
      margin: '0 auto'
    }}>
      <h3 style={{ 
        color: '#1a2744', 
        fontWeight: 800, 
        fontSize: '1.5rem', 
        marginBottom: 8,
        textAlign: 'center'
      }}>
        हमें अपना अनुभव बताएं
      </h3>
      <p style={{ 
        color: '#666', 
        textAlign: 'center', 
        marginBottom: 32,
        fontSize: '0.95rem'
      }}>
        आपकी राय हमारे लिए महत्वपूर्ण है
      </p>

      <form onSubmit={handleSubmit}>
        {/* Star Rating */}
        <div style={{ marginBottom: 32, textAlign: 'center' }}>
          <div style={{ fontSize: '0.95rem', color: '#555', marginBottom: 16, fontWeight: 600 }}>
            अपनी experience को rate करें:
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '3rem',
                  color: star <= (hoveredRating || rating) ? '#f59e0b' : '#e5e7eb',
                  transition: 'all 0.2s',
                  transform: star <= (hoveredRating || rating) ? 'scale(1.15)' : 'scale(1)',
                  filter: star <= (hoveredRating || rating) ? 'drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3))' : 'none'
                }}
              >
                ★
              </button>
            ))}
          </div>
          <div style={{ 
            marginTop: 12, 
            color: '#e05a1c', 
            fontWeight: 700,
            fontSize: '1.1rem',
            minHeight: '28px'
          }}>
            {rating === 1 && '😞 Very Bad'}
            {rating === 2 && '😐 Bad'}
            {rating === 3 && '😊 Average'}
            {rating === 4 && '😃 Good'}
            {rating === 5 && '🤩 Excellent!'}
          </div>
        </div>

        {/* Quick Tags */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: '0.95rem', color: '#555', marginBottom: 16, fontWeight: 600 }}>
            आपको क्या पसंद आया? (Select all that apply)
          </div>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 10,
            justifyContent: 'center'
          }}>
            {tags.map((tag) => {
              const isSelected = selectedTags.includes(tag.text);
              const bgColor = isSelected 
                ? (tag.category === 'positive' ? '#10b981' : tag.category === 'negative' ? '#ef4444' : '#f59e0b')
                : '#f3f4f6';
              const textColor = isSelected ? 'white' : '#374151';
              
              return (
                <button
                  key={tag.text}
                  type="button"
                  onClick={() => toggleTag(tag.text)}
                  style={{
                    background: bgColor,
                    color: textColor,
                    border: '2px solid transparent',
                    padding: '10px 16px',
                    borderRadius: 25,
                    fontSize: '0.9rem',
                    fontWeight: isSelected ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isSelected ? '0 2px 8px rgba(0,0,0,0.15)' : 'none'
                  }}
                >
                  <span>{tag.emoji}</span>
                  <span>{tag.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Personal Details */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 16,
          marginBottom: 20
        }}>
          <div>
            <label style={{ 
              display: 'block', 
              fontWeight: 600, 
              color: '#1a2744', 
              marginBottom: 6, 
              fontSize: '0.9rem' 
            }}>
              आपका नाम *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: 10,
                fontSize: '0.95rem',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
                outline: 'none'
              }}
              placeholder="अपना नाम दर्ज करें"
              onFocus={(e) => e.target.style.borderColor = '#e05a1c'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontWeight: 600, 
              color: '#1a2744', 
              marginBottom: 6, 
              fontSize: '0.9rem' 
            }}>
              मोबाइल नंबर *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: 10,
                fontSize: '0.95rem',
                boxSizing: 'border-box',
                outline: 'none'
              }}
              placeholder="10-digit mobile number"
              onFocus={(e) => e.target.style.borderColor = '#e05a1c'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontWeight: 600, 
              color: '#1a2744', 
              marginBottom: 6, 
              fontSize: '0.9rem' 
            }}>
              शहर
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: 10,
                fontSize: '0.95rem',
                boxSizing: 'border-box',
                outline: 'none'
              }}
              placeholder="आपका शहर"
              onFocus={(e) => e.target.style.borderColor = '#e05a1c'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontWeight: 600, 
              color: '#1a2744', 
              marginBottom: 6, 
              fontSize: '0.9rem' 
            }}>
              Service Type
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: 10,
                fontSize: '0.95rem',
                boxSizing: 'border-box',
                outline: 'none',
                background: 'white'
              }}
              onFocus={(e) => e.target.style.borderColor = '#e05a1c'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            >
              <option value="">Select Service</option>
              <option value="Full Truck Load (FTL)">Full Truck Load (FTL)</option>
              <option value="Part Load (LTL)">Part Load (LTL)</option>
              <option value="Door-to-Door">Door-to-Door Delivery</option>
              <option value="Express Delivery">Express Delivery</option>
              <option value="Industrial Goods">Industrial Goods</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Detailed Review */}
        <div style={{ marginBottom: 28 }}>
          <label style={{ 
            display: 'block', 
            fontWeight: 600, 
            color: '#1a2744', 
            marginBottom: 8, 
            fontSize: '0.9rem' 
          }}>
            अपने experience के बारे में विस्तार से बताएं *
          </label>
          <textarea
            required
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={5}
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '2px solid #e5e7eb',
              borderRadius: 10,
              fontSize: '0.95rem',
              resize: 'vertical',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              lineHeight: 1.6,
              outline: 'none'
            }}
            placeholder="आपको हमारी service कैसी लगी? ड्राइवर का behavior, delivery time, truck condition आदि के बारे में बताएं..."
            onFocus={(e) => e.target.style.borderColor = '#e05a1c'}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            borderRadius: 12,
            fontWeight: 700,
            fontSize: '1.1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
          }}
        >
          <span>💬</span>
          <span>WhatsApp पर Review भेजें</span>
        </button>

        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '0.85rem',
          marginTop: 12,
          margin: 0
        }}>
          ✓ आपका review हमें improve करने में मदद करेगा
        </p>
      </form>
    </div>
  );
}