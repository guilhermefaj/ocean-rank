import {faLinkedin, faInstagram, faTwitter, faFacebook, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { SocialLink, Section, SocialList, SocialListItem, } from "./contatoStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';

export default function Contato(){
    return (
        <Section>
          <SocialList>
            <SocialListItem>
              <SocialLink href="https://www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialLink>
            </SocialListItem>
            <SocialListItem>
              <SocialLink href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
                </SocialLink>
              </SocialListItem>
              <SocialListItem>
              <SocialLink href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
                </SocialLink>
              </SocialListItem>
            
            <SocialListItem>
              <SocialLink href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
                </SocialLink>
              </SocialListItem>
            <SocialListItem>
              <SocialLink href="https://youtube.com">
                <FontAwesomeIcon icon={faYoutube} />
                </SocialLink>
            </SocialListItem>
            <SocialListItem>
              <SocialLink href="https://tiktok.com">
                <FontAwesomeIcon icon={faTiktok} />
                </SocialLink>
            </SocialListItem>
            <SocialListItem>
              <SocialLink href="https://pinterest.com">
                <FontAwesomeIcon icon={faPinterest} />
                </SocialLink>
            </SocialListItem>
            
            </SocialList>
          </Section>
    )
}