'use strict';
const Controller = require('egg').Controller;
const _ = require('lodash');
const shortid = require('shortid');

class TechnologyController extends Controller {
  async getDataForTechnology() {
    const ctx = this.ctx;
    ctx.tempPage = '/technology.html';
    ctx.pageType = 'technology';
    await ctx.getPageData();
  }


}

module.exports = TechnologyController;
