/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export class GetImage {
  private static baseUrl = '/img/';
  private static logoUrl = GetImage.baseUrl + '_logo/';
  private static homeUrl = GetImage.baseUrl + 'home/';
  private static aboutUrl = GetImage.baseUrl + 'about/our-company';
  private static teamUrl = GetImage.baseUrl + 'about/our-company/team';
  private static otherTeamMembersUrl = GetImage.baseUrl + 'about/our-company/other-team-members';
  private static advisorsUrl = GetImage.baseUrl + 'about/our-company/team';

  static mediaLogo(name: string) {
    return `${this.logoUrl}media/${name}-logo__250x.webp`;
  }

  static partnerLogo(name: string) {
    return `${this.logoUrl}partners/${name}-logo__250x.webp`;
  }

  static investorLogo(name: string) {
    return `${this.logoUrl}investors/${name}-logo__250x.webp`;
  }

  static cribmdLogo(name: string) {
    return `${this.logoUrl}cribmd/logo-${name}__250x.webp`;
  }

  static home(name: string, size?: '1x' | '2x') {
    return `${this.homeUrl}${name}__${parseInt(String(size || 1)) * 500}x.webp`;
  }

  static about(name: string, size?: '1x' | '2x') {
    return `${this.aboutUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }

  static team(name: string, size?: '1x' | '2x') {
    return `${this.teamUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }

  static otherTeamMembers(name: string, size?: '1x' | '2x') {
    return `${this.otherTeamMembersUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }

  static advisors(name: string, size?: '1x' | '2x') {
    return `${this.advisorsUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }

  static healthPlans(name: string) {
    return `${GetImage.baseUrl}health-plans/${name}.webp`;
  }

  static testifier(name: string) {
    return `${this.baseUrl}_testifiers/${name}.webp`;
  }

  static shared(name: string) {
    return `${this.baseUrl}_shared/${name}.webp`;
  }

  static gallery(name: string) {
    return `${this.baseUrl}about/gallery/${name}.webp`;
  }
}
