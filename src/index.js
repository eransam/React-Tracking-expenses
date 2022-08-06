import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// אנו נציג את הקומפוננטה הראשית שלנו root פה אנו אומרים שבתוך דיב עם קלאס 
//(index.html בקובץ  public דיב זה נמצא תחת תיקיית )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
