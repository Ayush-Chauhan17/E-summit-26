import { Check, X } from "lucide-react";
import "./TicketCard.css";

export default function PassCard({
  title,
  originalPrice,
  priceText,
  features,
}) {
  return (
    <div className="pass-card-wrapper">
      <div className="pass-card">
        {/* Title */}
        <h2 className="pass-title">{title}</h2>

        {/* Price */}
        <div className="pass-price">
          {originalPrice && (
            <span className="original-price">₹{originalPrice}</span>
          )}
          <span className="final-price">{priceText}</span>
        </div>

        {/* Features */}
        <ul className="features-list">
          {features.map((item, index) => (
            <li key={index} className="feature-item">
              {item.available ? (
                <span className="icon available">
                  <Check size={18} />
                </span>
              ) : (
                <span className="icon unavailable">
                  <X size={16} />
                </span>
              )}
              <span className="feature-text">{item.label}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
      </div>
    </div>
  );
}
