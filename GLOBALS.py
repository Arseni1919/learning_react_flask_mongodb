from flask import Flask, render_template, Blueprint, send_from_directory
from flask import session, redirect, url_for
from flask import request, send_file, jsonify
# import flask_login
import json

import statistics as stats
from dotenv import load_dotenv
import os
import io
from io import BytesIO

# import pandas as pd
# import numpy as np
# import matplotlib.dates as mdates
# from matplotlib.figure import Figure
#
# import yagmail
# from apscheduler.schedulers.background import BackgroundScheduler
#
# import yfinance as yf
# from yahoo_fin import stock_info as si

import time
import threading
import calendar

stocks_names_list = [
    'AAPL',
    'AMZN',
    'DIA',
    'FB',
    'GLD',
    'GOOG',
    'GOOGL',
    'GOVT',
    'IAU',
    'IEF',
    'IGSB',
    'IVV',
    'LQD',
    'MSFT',
    'NFLX',
    'QQQ',
    'SHY',
    'SPY',
    'TLT',
    'TSLA',
    'VCIT',
    'VCSH',
    'VIXY',
    'VOO',
]