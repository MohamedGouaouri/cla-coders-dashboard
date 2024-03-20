/* eslint-disable react/prop-types */
import First from '../../assets/first.svg'
import Second from '../../assets/second.svg'
import Third from '../../assets/third.svg'



function TopKIcon({ rank }) {
    let iconSrc;
    switch (rank) {
        case 1:
            iconSrc = First;
            break;
        case 2:
            iconSrc = Second;
            break;
        case 3:
            iconSrc = Third;
            break;
        default:
            return null;
    }

    return (
        <span>
            <img src={iconSrc} alt="Rank Icon" className="w-8 h-8 rounded-full" /> {/* Apply Tailwind classes for small size */}
        </span>
    );
}

export default TopKIcon