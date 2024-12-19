
This is a responsive React-based **File Claim Form** application built with **Next.js** and **Tailwind CSS**. The form allows users to input claim values, specify place and language details, and upload necessary documents. It works seamlessly on all device sizes, including large screens.

## **Technologies Used**

- **React**: Component-based architecture for building the UI.
- **Next.js**: A framework for React that enables server-side rendering and other optimizations.
- **Tailwind CSS**: Utility-first CSS framework for building modern, responsive designs quickly.
- **TypeScript**: Adds type safety to the code for better development experience.


## **1. Approach to Building the Dashboard**

### **Design and Componentization**
- **Modular Components**: The application was built by breaking down the UI into reusable components:
  - **Form**: The main container holding the input fields and upload sections.
  - **UploadField**: Handles file upload logic and rendering.
  - **UploadCards**: Displays file upload cards for various document types.
  - **AdditionalCard**: Provides upload functionality for additional documentation.
- **Separation of Concerns**: Each component has a clear responsibility, which improves maintainability and readability.

### **Responsive Design**
- Tailwind CSS was used to ensure the form works well on all devices:
  - `grid-cols` utility classes provide a responsive grid layout for **small (sm)**, **medium (md)**, and **large (lg)** screen sizes.
  - CSS media queries automatically adjust the layout when the screen size changes.
- The layout adapts as follows:
  - **Small Screens**: A single-column layout for better readability.
  - **Medium Screens**: Two-column layout for better use of space.
  - **Large Screens**: Three-column layout with enhanced spacing and alignment.

### **File Uploads**
- **Drag-and-drop inspired upload cards** were created with dashed borders, hover effects, and file size validation.
- Each card is designed to handle specific document uploads such as:
  - Contract Files
  - Arbitration Agreements
  - Additional Documentation

---

## **2. Challenges Faced and Solutions**

### **1. Responsive Grid Alignment**
- **Problem**: On large screens, the form layout was breaking, and the form fields did not align properly.
- **Solution**:
  - Added the `lg:grid-cols-3` class to create a three-column grid layout for large screens.
  - Ensured consistent padding, margins, and heights for all input fields using Tailwind utility classes.
  - Adjusted flex and grid gap sizes to maintain proper spacing.

### **2. File Upload Design and State Management**
- **Problem**: File upload components had to support:
  - Different document types.
  - Displaying appropriate labels and hover effects.
- **Solution**:
  - Created a reusable `UploadField` component for consistent upload logic.
  - Implemented individual `UploadCards` and `AdditionalCard` components for clarity and customization.

### **3. Tailwind CSS Overwriting Defaults**
- **Problem**: Some Tailwind CSS classes conflicted with form default styles.
- **Solution**:
  - Used Tailwind's utility classes explicitly to override unwanted default behavior.
  - Applied focus and hover states consistently across all inputs and buttons for a clean UX.

---

## **3. Assumptions Made**

1. **File Upload Restrictions**:
   - Only PDF files are allowed for upload.
   - The file size is limited to 2MB.

4. **Icons and Assets**:
   - Icons like `upload.svg`, `calculator.svg`, etc., are stored in the `public` folder for simplicity.

5. **Deployment Environment**:
   - The app will primarily be deployed on modern browsers and tested for compatibility with mobile, tablet, and desktop devices.


---
## **4. Responsive views**

1. **Small device view**:
   -Here is the view on small device (iphone 14 pro max)
![Alt Text](/public/small1.png)
![Alt Text](/public/small2.png)


2. **Medium device view**:
   -Here is the view on medium device (ipad)
![Alt Text](/public/medium1.png.png)
![Alt Text](/public/Medium2.png.png)

2. **Large device view**:
   -Here is the view on large device (My own laptop)
![Alt Text](/public/large2.png.png)
![Alt Text](/public/large.png)
