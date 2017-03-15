'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var skipWarn = this.props.skipWarn;

      if (!skipWarn) {
        console.warn('Base icons are now deprecated, use raw svg with grommet-icon-loader');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-brand-google-play', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'brand-google-play');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 312 90', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { stroke: 'none', fill: '#000000', fillRule: 'evenodd', d: 'M300.444444,91.3688796 L11.5555556,91.3688796 C5.20288889,91.3688796 0,86.2265248 0,79.9477696 L0,11.4211099 C0,5.14235475 5.20288889,0 11.5555556,0 L300.444444,0 C306.797111,0 312,5.14235475 312,11.4211099 L312,79.9477696 C312,86.2265248 306.797111,91.3688796 300.444444,91.3688796 L300.444444,91.3688796 Z M25.1464417,14.575667 C23.7011285,13.7662916 22.5294707,14.4585211 22.5294707,16.1158011 L22.5294707,74.6611975 C22.5294707,76.3211655 23.7069685,77.0074366 25.1464417,76.2013316 L77.5523855,46.8540031 C78.9976987,46.0446277 78.9918587,44.7291005 77.5523855,43.9229955 L25.1464417,14.575667 Z M109.587111,23.398999 C109.587111,25.3063244 109.009333,26.8338978 107.871111,27.9731535 C106.562444,29.3236998 104.858,30.0032558 102.769333,30.0032558 C100.773111,30.0032558 99.0686667,29.3122787 97.6704444,27.9503113 C96.2693333,26.568357 95.5702222,24.8723222 95.5702222,22.8422199 C95.5702222,20.8121176 96.2693333,19.1160828 97.6704444,17.7455496 C99.0686667,16.3721611 100.773111,15.681184 102.769333,15.681184 C103.763111,15.681184 104.710667,15.8839087 105.614889,16.2608053 C106.516222,16.6405572 107.25,17.1545071 107.781556,17.7883787 L106.574,18.9933058 C105.646667,17.9111557 104.384222,17.3772188 102.769333,17.3772188 C101.313333,17.3772188 100.050889,17.8797476 98.9791111,18.8933711 C97.9188889,19.9098499 97.3873333,21.2261328 97.3873333,22.8422199 C97.3873333,24.4583069 97.9188889,25.786011 98.9791111,26.8024898 C100.050889,27.8046922 101.313333,28.3186421 102.769333,28.3186421 C104.314889,28.3186421 105.614889,27.8046922 106.640444,26.7910687 C107.316444,26.1200784 107.700667,25.1949685 107.801778,24.0128837 L102.769333,24.0128837 L102.769333,22.3625333 L109.483111,22.3625333 C109.564,22.719443 109.587111,23.0649315 109.587111,23.398999 L109.587111,23.398999 Z M120.238444,17.6770229 L113.932,17.6770229 L113.932,22.0170447 L119.617333,22.0170447 L119.617333,23.6673951 L113.932,23.6673951 L113.932,28.0074169 L120.238444,28.0074169 L120.238444,29.6891753 L112.146667,29.6891753 L112.146667,15.9952645 L120.238444,15.9952645 L120.238444,17.6770229 L120.238444,17.6770229 Z M127.755333,29.6891753 L125.97,29.6891753 L125.97,17.6770229 L122.101778,17.6770229 L122.101778,15.9952645 L131.626444,15.9952645 L131.626444,17.6770229 L127.755333,17.6770229 L127.755333,29.6891753 L127.755333,29.6891753 Z M138.519333,29.6891753 L138.519333,15.9952645 L140.301778,15.9952645 L140.301778,29.6891753 L138.519333,29.6891753 L138.519333,29.6891753 Z M148.202889,29.6891753 L146.432,29.6891753 L146.432,17.6770229 L142.549333,17.6770229 L142.549333,15.9952645 L152.085556,15.9952645 L152.085556,17.6770229 L148.202889,17.6770229 L148.202889,29.6891753 L148.202889,29.6891753 Z M170.118,27.9274691 C168.751556,29.3122787 167.058667,30.0032558 165.039333,30.0032558 C163.008444,30.0032558 161.315556,29.3122787 159.949111,27.9274691 C158.585556,26.5455148 157.906667,24.84948 157.906667,22.8422199 C157.906667,20.8349598 158.585556,19.138925 159.949111,17.7569707 C161.315556,16.3721611 163.008444,15.681184 165.039333,15.681184 C167.047111,15.681184 168.74,16.3721611 170.106444,17.7683918 C171.481556,19.1617672 172.160444,20.8463809 172.160444,22.8422199 C172.160444,24.84948 171.481556,26.5455148 170.118,27.9274691 L170.118,27.9274691 Z M161.269333,26.7796475 C162.297778,27.8046922 163.548667,28.3186421 165.039333,28.3186421 C166.518444,28.3186421 167.780889,27.8046922 168.797778,26.7796475 C169.823333,25.7546029 170.343333,24.43832 170.343333,22.8422199 C170.343333,21.2461198 169.823333,19.9298369 168.797778,18.9047922 C167.780889,17.8797476 166.518444,17.3657977 165.039333,17.3657977 C163.548667,17.3657977 162.297778,17.8797476 161.269333,18.9047922 C160.243778,19.9298369 159.723778,21.2461198 159.723778,22.8422199 C159.723778,24.43832 160.243778,25.7546029 161.269333,26.7796475 L161.269333,26.7796475 Z M174.665111,29.6891753 L174.665111,15.9952645 L176.831778,15.9952645 L183.568667,26.6454495 L183.646667,26.6454495 L183.568667,24.0128837 L183.568667,15.9952645 L185.351111,15.9952645 L185.351111,29.6891753 L183.490667,29.6891753 L176.436,18.5136192 L176.358,18.5136192 L176.436,21.1576062 L176.436,29.6891753 L174.665111,29.6891753 L174.665111,29.6891753 Z M157.467556,49.6875388 C152.039333,49.6875388 147.604889,53.7705856 147.604889,59.4040481 C147.604889,64.9918261 152.039333,69.1177021 157.467556,69.1177021 C162.907333,69.1177021 167.341778,64.9918261 167.341778,59.4040481 C167.341778,53.7705856 162.907333,49.6875388 157.467556,49.6875388 L157.467556,49.6875388 Z M157.467556,65.2916303 C154.489111,65.2916303 151.926667,62.8617891 151.926667,59.4040481 C151.926667,55.9006226 154.489111,53.5136106 157.467556,53.5136106 C160.446,53.5136106 163.02,55.9006226 163.02,59.4040481 C163.02,62.8617891 160.446,65.2916303 157.467556,65.2916303 L157.467556,65.2916303 Z M135.948222,49.6875388 C130.508444,49.6875388 126.085556,53.7705856 126.085556,59.4040481 C126.085556,64.9918261 130.508444,69.1177021 135.948222,69.1177021 C141.385111,69.1177021 145.810889,64.9918261 145.810889,59.4040481 C145.810889,53.7705856 141.385111,49.6875388 135.948222,49.6875388 L135.948222,49.6875388 Z M135.948222,65.2916303 C132.966889,65.2916303 130.395778,62.8617891 130.395778,59.4040481 C130.395778,55.9006226 132.966889,53.5136106 135.948222,53.5136106 C138.926667,53.5136106 141.489111,55.9006226 141.489111,59.4040481 C141.489111,62.8617891 138.926667,65.2916303 135.948222,65.2916303 L135.948222,65.2916303 Z M110.341111,52.6655932 L110.341111,56.7943245 L120.316444,56.7943245 C120.024667,59.1013887 119.244667,60.7974235 118.048667,61.9795084 C116.592667,63.4071471 114.324889,64.9918261 110.341111,64.9918261 C104.202222,64.9918261 99.3951111,60.0950253 99.3951111,54.0275606 C99.3951111,47.9600959 104.202222,43.063295 110.341111,43.063295 C113.660444,43.063295 116.075556,44.3453146 117.858,46.0070861 L120.801778,43.0975584 C118.308667,40.7448097 114.992222,38.9374191 110.341111,38.9374191 C101.922889,38.9374191 94.848,45.707282 94.848,54.0275606 C94.848,62.3478392 101.922889,69.1177021 110.341111,69.1177021 C114.891111,69.1177021 118.308667,67.6443789 120.995333,64.8804703 C123.748444,62.1593909 124.606444,58.333319 124.606444,55.2439088 C124.606444,54.2845356 124.525556,53.4022548 124.381111,52.6655932 L110.341111,52.6655932 L110.341111,52.6655932 Z M215.051778,55.8663593 C214.24,53.6934931 211.735333,49.6875388 206.633556,49.6875388 C201.578,49.6875388 197.368889,53.6249665 197.368889,59.4040481 C197.368889,64.846207 201.534667,69.1177021 207.118889,69.1177021 C211.634222,69.1177021 214.24,66.3966227 215.311778,64.8119437 L211.960667,62.6048142 C210.842667,64.2209012 209.320222,65.2916303 207.118889,65.2916303 C204.932,65.2916303 203.363333,64.300849 202.358,62.3478392 L215.505333,56.9713517 L215.051778,55.8663593 L215.051778,55.8663593 Z M201.647333,59.1013887 C201.534667,55.3552646 204.591111,53.4365182 206.780889,53.4365182 C208.496889,53.4365182 209.952889,54.2845356 210.438222,55.4980285 L201.647333,59.1013887 L201.647333,59.1013887 Z M190.961333,68.5266597 L195.283111,68.5266597 L195.283111,39.9738848 L190.961333,39.9738848 L190.961333,68.5266597 L190.961333,68.5266597 Z M183.883556,51.8518392 L183.739111,51.8518392 C182.768444,50.7154387 180.916667,49.6875388 178.570889,49.6875388 C173.648222,49.6875388 169.147333,53.9590339 169.147333,59.4354562 C169.147333,64.8804703 173.648222,69.1177021 178.570889,69.1177021 C180.916667,69.1177021 182.768444,68.0812364 183.739111,66.9105726 L183.883556,66.9105726 L183.883556,68.303948 C183.883556,72.018664 181.875778,74.014503 178.637333,74.014503 C175.996889,74.014503 174.358889,72.1300199 173.682889,70.5453409 L169.924444,72.0957565 C171.007778,74.6712168 173.876444,77.8405748 178.637333,77.8405748 C183.704444,77.8405748 187.98,74.8939285 187.98,67.7243267 L187.98,50.2785813 L183.883556,50.2785813 L183.883556,51.8518392 L183.883556,51.8518392 Z M178.940667,65.2916303 C175.962222,65.2916303 173.469111,62.8275258 173.469111,59.4354562 C173.469111,56.0119784 175.962222,53.5136106 178.940667,53.5136106 C181.875778,53.5136106 184.189778,56.0119784 184.189778,59.4354562 C184.189778,62.8275258 181.875778,65.2916303 178.940667,65.2916303 L178.940667,65.2916303 Z M235.285556,39.9738848 L224.949111,39.9738848 L224.949111,68.5266597 L229.259333,68.5266597 L229.259333,57.7080133 L235.285556,57.7080133 C240.072444,57.7080133 244.766889,54.2845356 244.766889,48.8395214 C244.766889,43.3973625 240.060889,39.9738848 235.285556,39.9738848 L235.285556,39.9738848 Z M235.398222,53.7363223 L229.259333,53.7363223 L229.259333,43.9455758 L235.398222,43.9455758 C238.616444,43.9455758 240.453778,46.5867075 240.453778,48.8395214 C240.453778,51.0495062 238.616444,53.7363223 235.398222,53.7363223 L235.398222,53.7363223 Z M262.042444,49.6332885 C258.928222,49.6332885 255.689778,50.9924006 254.358,54.0047184 L258.182889,55.5893974 C259.006222,54.0047184 260.52,53.4907684 262.120444,53.4907684 C264.356444,53.4907684 266.624222,54.8184725 266.658889,57.1626553 L266.658889,57.4624594 C265.878889,57.0170361 264.209111,56.357467 262.155111,56.357467 C258.035556,56.357467 253.838,58.5988599 253.838,62.7818414 C253.838,66.6079132 257.212222,69.0720177 261.005333,69.0720177 C263.905778,69.0720177 265.506222,67.778577 266.511556,66.2738457 L266.658889,66.2738457 L266.658889,68.4809752 L270.821778,68.4809752 L270.821778,57.5281308 C270.821778,52.4657238 266.996889,49.6332885 262.042444,49.6332885 L262.042444,49.6332885 Z M261.522444,65.2802092 C260.112667,65.2802092 258.148222,64.589232 258.148222,62.8617891 C258.148222,60.6518044 260.598,59.803787 262.718444,59.803787 C264.616444,59.803787 265.506222,60.2178022 266.658889,60.7631602 C266.320889,63.4071471 264.018444,65.2802092 261.522444,65.2802092 L261.522444,65.2802092 Z M285.988444,50.2585943 L281.034,62.6362222 L280.886667,62.6362222 L275.764667,50.2585943 L271.116444,50.2585943 L278.812444,67.5558653 L274.421333,77.1810057 L278.925111,77.1810057 L290.784,50.2585943 L285.988444,50.2585943 L285.988444,50.2585943 Z M247.135778,68.5266597 L251.457556,68.5266597 L251.457556,39.9738848 L247.135778,39.9738848 L247.135778,68.5266597 L247.135778,68.5266597 Z' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'BrandGooglePlay';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool,
  skipWarn: _react.PropTypes.bool
};
module.exports = exports['default'];