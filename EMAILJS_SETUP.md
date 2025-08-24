# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Settings:
- **Template Name**: Portfolio Contact Form
- **Subject**: New message from {{from_name}} - {{subject}}

### Template Body:
```
Hello {{to_name}},

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" section in your dashboard
2. Find your **Public Key** (User ID)

## Step 5: Update Your Code
Replace the placeholder values in ContactForm.js:

```javascript
const EMAILJS_SERVICE_ID = "your_service_id_here";
const EMAILJS_TEMPLATE_ID = "your_template_id_here"; 
const EMAILJS_PUBLIC_KEY = "TWPCVB7aS6ejx1nIs";
```

## Step 6: Test Your Form
1. Fill out your contact form
2. Submit it
3. Check your email for the message
4. Check the EmailJS dashboard for delivery status

## Free Tier Limits:
- 200 emails per month
- Perfect for a portfolio website

## Security Note:
The public key is safe to expose in frontend code. EmailJS is designed for client-side usage.

## Troubleshooting:
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is properly connected
- Test the template in EmailJS dashboard first
