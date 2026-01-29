# LinkedIn API Setup Guide

This guide will help you set up and configure the LinkedIn API integration for the Media page.

## Current Credentials

```
Client ID: YOUR_LINKEDIN_CLIENT_ID
Client Secret: YOUR_LINKEDIN_CLIENT_SECRET
Organization ID: YOUR_LINKEDIN_ORG_ID
```

## Step 1: Get Access Token

You need to obtain an Access Token to authenticate with the LinkedIn API. There are two methods:

### Method 1: Client Credentials Flow (Recommended for Testing)

```bash
curl -X POST https://www.linkedin.com/oauth/v2/accessToken \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials" \
  -d "client_id=YOUR_LINKEDIN_CLIENT_ID" \
  -d "client_secret=YOUR_LINKEDIN_CLIENT_SECRET"
```

### Method 2: Authorization Code Flow (For Production)

1. Visit the LinkedIn Developer Portal: https://www.linkedin.com/developers/apps
2. Navigate to your app
3. Go to the "Auth" tab
4. Add your redirect URI (e.g., `http://localhost:3000/api/auth/callback`)
5. Request the following scopes:
   - `r_organization_social` (Read organization posts)
   - `w_organization_social` (Optional: for posting)
6. Use the OAuth 2.0 authorization URL:

```
https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_LINKEDIN_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=r_organization_social
```

7. Exchange the authorization code for an access token

## Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your credentials:
   ```env
   LINKEDIN_CLIENT_ID=YOUR_LINKEDIN_CLIENT_ID
   LINKEDIN_CLIENT_SECRET=YOUR_LINKEDIN_CLIENT_SECRET
   LINKEDIN_ACCESS_TOKEN=YOUR_ACCESS_TOKEN_HERE
   LINKEDIN_ORG_ID=YOUR_LINKEDIN_ORG_ID
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. **IMPORTANT**: Replace `YOUR_ACCESS_TOKEN_HERE` with the actual access token you obtained in Step 1

## Step 3: Test the Integration

1. Restart the development server:
   ```bash
   npm run dev
   ```

2. Test the API endpoint directly:
   ```bash
   curl http://localhost:3000/api/linkedin-posts
   ```

3. Visit the Media page:
   ```
   http://localhost:3000/media
   ```

## Fallback Behavior

If the LinkedIn API fails or is not configured:
- The system will automatically use fallback posts from `lib/linkedin-config.ts`
- This ensures the Media page always displays content
- Update the fallback posts with real data for better user experience

## LinkedIn API Endpoints Used

- **Get Organization Posts**: `GET /v2/ugcPosts`
  - Query parameter: `q=authors`
  - Filter: `authors=urn:li:organization:{ORG_ID}`
  - Count: `count=10`
  - Sort: `sortBy=LAST_MODIFIED`

## Troubleshooting

### Issue: "Missing LinkedIn credentials" error
**Solution**: Ensure all environment variables are set in `.env.local`

### Issue: "Failed to fetch LinkedIn posts" error
**Solution**: 
- Check if your access token is valid
- Verify your app has the correct permissions (`r_organization_social`)
- Check if your Organization ID is correct

### Issue: Empty posts returned
**Solution**: 
- Verify posts exist on your LinkedIn company page
- Check if the Organization ID matches your company page
- Ensure your access token has permission to read organization posts

### Issue: Token expired
**Solution**: 
- LinkedIn access tokens typically expire after 60 days
- Generate a new access token using the methods in Step 1
- For production, implement automatic token refresh

## Production Deployment

1. Add environment variables to your production hosting platform (Vercel, Netlify, etc.)
2. Update `NEXT_PUBLIC_BASE_URL` to your production domain
3. Ensure `.env.local` is in `.gitignore` (already configured)
4. Consider implementing token refresh logic for long-term use
5. Set up monitoring for API failures

## Security Notes

⚠️ **IMPORTANT**:
- Never commit `.env.local` to git
- Keep your Client Secret and Access Token private
- Rotate credentials if they are exposed
- Use environment variables for all sensitive data
- Consider using a secrets manager for production

## Additional Resources

- LinkedIn API Documentation: https://learn.microsoft.com/en-us/linkedin/
- OAuth 2.0 Guide: https://learn.microsoft.com/en-us/linkedin/shared/authentication/authentication
- Organization Posts API: https://learn.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/ugc-post-api
