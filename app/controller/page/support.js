'use strict';
const Controller = require('egg').Controller;
const _ = require('lodash');
const shortid = require('shortid');

class SupportController extends Controller {
  async getDataForRequest() {
    const ctx = this.ctx;
    ctx.tempPage = '/submit-request.html';
    ctx.pageType = 'submit-request';
    await ctx.getPageData();
  }

  async getDataForSupport() {
    const ctx = this.ctx;

    ctx.tempPage = '/support.html';
    ctx.pageType = 'support';
    await ctx.getPageData();
  }
}

module.exports = SupportController;
