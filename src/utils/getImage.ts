/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export class GetImage {
  private static baseUrl = '/img/';
  private static logoUrl = GetImage.baseUrl + '_logo/';
  private static homeUrl = GetImage.baseUrl + 'home/';
  private static healthPlansUrl = GetImage.baseUrl + 'health-plans/';
  private static aboutCompanyUrl = GetImage.baseUrl + 'about/our-company/';

  static mediaLogo(name: string) {
    return `${this.logoUrl}media/${name}-logo__125x.webp`;
  }

  static partnerLogo(name: string) {
    return `${this.logoUrl}partners/${name}.webp`;
  }

  static investorLogo(name: string) {
    return `${this.logoUrl}investors/${name}-logo__125x.webp`;
  }

  static cribmdLogo(name: string) {
    return `${this.logoUrl}cribmd/logo-${name}__250x.webp`;
  }

  static home(name: string, size?: '1x' | '2x') {
    return `${this.homeUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }

  static corporate(name: string, size?: '1x' | '2x') {
    return `${this.healthPlansUrl}corporate/${name}__${parseInt(String(size || 1)) * 450}x.webp`;
  }

  static individual(name: string, size?: '1x' | '2x') {
    return `${this.healthPlansUrl}individual/${name}__${parseInt(String(size || 1)) * 450}x.webp`;
  }

  // static about(name: string, size?: '1x' | '2x') {
  //   return `${this.aboutCompanyUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  // }

  static about_company(name: string, size?: '1x' | '2x') {
    return `${this.aboutCompanyUrl}${name}__${parseInt(String(size || 1)) * 500}x.webp`;
  }

  static teamMembersPrimary(name: string) {
    return `${this.baseUrl}about/our-company/team-members-primary/${name}.webp`;
  }

  static teamMembersSecondary(name: string) {
    return `${this.baseUrl}about/our-company/team-members-secondary/${name}.webp`;
  }

  static advisors(name: string) {
    return `${this.baseUrl}about/our-company/advisors/${name}.webp`;
  }

  static doctors(name: string) {
    return `${this.baseUrl}about/our-company/doctors/${name}.webp`;
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
