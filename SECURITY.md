# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security seriously at Tropic Health. If you discover a security vulnerability, please follow these steps:

### 1. Do Not Report Publicly
- **DO NOT** create public GitHub issues for security vulnerabilities
- **DO NOT** post details on social media or forums

### 2. Report Privately
Send details to: **security@tropic-health.com**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Your contact information

### 3. Response Timeline
- **24 hours**: Initial acknowledgment
- **72 hours**: Initial assessment
- **7 days**: Progress update or resolution

### 4. Responsible Disclosure
We follow responsible disclosure practices:
- We'll work with you to understand and resolve the issue
- We'll credit you in our security acknowledgments (if desired)
- We ask for reasonable time to fix issues before public disclosure

## Security Measures

### API Security
- JWT authentication with secure tokens
- HTTPS enforcement in production
- Rate limiting on all endpoints
- Input validation and sanitization

### Data Protection
- Encrypted data transmission
- Secure password hashing (bcrypt)
- PCI compliant payment processing (Stripe)
- HIPAA-compliant data handling

### Infrastructure Security
- Regular security updates
- Monitoring and logging
- Access controls and permissions
- Backup and recovery procedures

## Bug Bounty Program

We currently do not have a formal bug bounty program, but we appreciate responsible disclosure and may offer recognition or rewards at our discretion.

## Contact

For security-related questions:
- Email: security@tropic-health.com
- General support: support@tropic-health.com