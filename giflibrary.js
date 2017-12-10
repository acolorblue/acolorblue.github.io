var gif_root_link = 'https://media2.giphy.com/media/',
    gif_file_type = '/giphy.gif',
    gif_links_library = {
    'black': [
            '9uoYC7cjcU6w8',          '3o7btV5GAWaGkwjTrO',
            'r1fDuPIcs18d2',          'd3mlE7uhX8KFgEmY',
            '3og0IBdxsxb9zVNedW',     '3o7qDSOvfaCO9b3MlO',
            'FEikw3bXVHdMk',          'G4Ihli2UThrBS',
            'Lcn0yF1RcLANG',          '3o7aD4GrHwn8vsGBTa',
            '3oAt2dA6LxMkRrGc0g',     'S8LWP0CotPAQw',
            '11mPvWj3R3mCKA',         '4PT6v3PQKG6Yg',
            'xL7PDV9frcudO',          '3oEjI6SEda9CiPEYXm',
            'e5EcjjJx3dCFi',          'dEdmW17JnZhiU',
            'l46CkATpdyLwLI7vi',      'AJwnLEsQyT9oA',
            'zV5IxD2rFSM7e',          'SDxzM5LAVq5Tq',
            'OTbo92zetdsha',          'puOukoEvH4uAw',
            '26FPImXfDlv4AFbBC',      '9rI3eNjyRcYh2',
            'xUOxf0EniRe3ll2u8U',     'DEIW3lvLWJ5Cw',
            'FyKfseNB6a8tG',          '3oKIPBxpm5tHqcL1Ic',
            'uDwKGxTFrADvO',          'FxEwsOF1D79za',
            'l0MYBbEvqqi1kfuyA',      'NaYyhwIhoBvlS',
            'euSNx94MFW1jy',          'OpsfQone2H2Ok'
    ],


    'Vines': [
            'l2SpRUyjsNsNMmV5S',      '10IrVF7KGmvM0o',
            '3oEduNTGtlKewxtogo',     'zKUD9hZsGBkkw',
            'c29w5knr0IYJG',          'TslsUBmQLNEXK',
            'C4f91gwKTy9tS',          'BFf5ivGIgG2s0',
            '9NwBXFgYdlDpK'
    ],


    'Eyes Wide Shut': [
            '2poKnJu6wRSaA',          'cAHfy7VD1uHdK',
            'bNRar6lcFFaV2',          '59ezF4npvLm2k',
            'oldFSbhYDZ4BO',          'DQIXsH7t2EddC',
            '9ToVKkJC8fQnm',          'g2Nl5fMl0iGcw',
            'BQd9c1kr5jDY4'
    ],


    'Moonlight': [
            'Xhk7wLBHwP8gU',          '26hisgqHeNNktWN44',
            '3o7TKuBp89DVJ7XgoU',     '3oz8xYKMKtBJhutFjG',
            '3o6ZtiyTcziXAYgRji',     '3oz8xJGFf6No0M7w9a',
            'l3vQXe5tX7QSgCop2',      'l3vRcSoOS72pY5Vni',
            'd3pWWukPJO9a5aqQ'
    ],


    'Pulp Fiction': [
            '6uGhT1O4sxpi8',          'l2YWxte7sJB2XuE8M',
            '3o7aTskHEUdgCQAXde',     'TA5UdQTc3NVKg',
            'l0HlB7CwWCXCJpw64',      '3otPowzRBqAi3h9uM0',
            '3otPorWLQJq5GmHRtu',     '3o7aTnTBlMbHjMl0Eo',
            'l2YWso4o8fFrUR1QI'
    ],


    'Bande de Fille': [
            'EXiMHmTdgcoIU',          'Qt3vt8xrKTUBy',
            'VPDSQ8OJv5Kne',          'CGmceWEomznTa',
            'ns1mRSHBndhiU',          'OfgRvh47MSK5y',
            'Ua89F9dBJKdhK',          'wXIUEfvrwOvtK',
            'gJkrwv6THFiOk'
    ],


    'The Shining': [
            'k3ysanIoI6Yx2',          'l41YuwS5IipGquPmM',
            'RoajqIorBfSE',           '10TB6QfNrahdhS',
            '10TB6QfNrahdhS',         'YJDKRQN76wdt6',
            'l0O9ykfUZhs7P2yE8',      '8VJ16DcNZQtkA',
            'RGSOWl34ZdU4'
    ],


    'Paid In Full': [
            'kSRDfrzN3yDK',           'qQiFDYkcp8XpS',
            's1ZUdB0BQqoSY',          'SF6cX9wtwj7Uc',
            'nhkaltzUIFP68',          'GMTBZ77T4m0xi',
            'fe9UlkH8WQrfO',          'UzYPKUwesHWTu',
            'y9lgjxERVv4ac'
    ],


    '2001: A Space Odyssey': [
            'l41YsxKKVYnucStag',      'wypKXPQggwaCA',
            'cjyVveMCMgunS',          '9qvpvUBsRmdCU',
            '28c9Ym62NOgx2',          'PQH74MC1o5CE0',
            'l41lSxwF86GaxkLiU',      '3o7aCQsknNqt73ARA4',
            '3ohhwi8j3zjpDMhvxK'
    ],


    'Her': [
            'Vm9Xjqas7UwV2',          'oCXIQVUNVCVi',
            'MTdx3XPidzeta',          '9zG7DmJhIIVvq',
            '10OgOFYZTjGdLG',         '3oEhn6RR7pl2J4kWWc',
            'l46CBcVSYhDptGW1W',      'xT9KVlCjMDg9EzhlMA',
            'xUPOqnJGNE7Gn579ni'
    ],


    'Belly': [
            'uQPToaYmsw7Re',          'xUPOqFeSXVBK6mCQUM',
            '3ohA2EFxcAPeYjYQCI',     '26zzg3FS4ujr9A8W4',
            'cqrwPPJNwqFr2',          'uXhGS78Z7rai4',
            'at7KFlUoNpRmg',          '9s5kfblL56UO4',
            '13MsrYJTGRp75C'
    ],


    'Inglorious Basterds': [
            'exgtiECdN6GQ0',          'hKNPxrffFH0GY',
            'ALvdHigd2gBqw',          'xUPGcvdelgloOjwuFG',
            'xUPGcly9ezTKiw1NHq',     'SEOkDSHwFWj4Y',
            'xkjkDrg95nT4Q',          'vi3XAbNOVD7kQ',
            'NPdtXYv5HwCU8'
    ],


    'No Country For Old Men': [
            'kucMOIbIx9Txu',          'f5vQks4QqpC4o',
            'aW8GS805yvx3W',          'yS4pubxgAruXm',
            'pqfWqFtq5oTS',           '1GoHMc7DyBqQE',
            'sC109TZRjQ49i',          'WOSTj26s9Abmg',
            '14grDsndzujq80'
    ],


    'Trainspotting': [
            '26vIepVJO2HeLGDrW',      'xTiTnyeRrEG5wu9urC',
            '8BMI1Gt1jN8Wc',          'sxPBiCSqOyI0',
            'paOvvheQVn76o',          'IjraaOEk7hAgE',
            'CMzJ4isOJx7i',           '3mXZQ3QZWIa76',
            '6PFEyKuvSOYzC'
    ],


    'Twin Peaks': [
            'RjX4TC2MRuQyk',          '6VH3L9LKvIjf2',
            'dfvToBL1kNzzy',          '5dGmDXpZ7kzXW',
            '26FmPU63IQA7sDHQk',      'DGGB43E1m9Fok',
            '9vNvK2HcXe3mw',          'qjYRyp3a8cHde',
            'KmdW6g2CIXy7u'
    ],


    'Tiffany Pollard': [
            'Km4yzuT7rEzBK',          '1E26TqSG8DkBO',
            'NIYbDsR0aDVeg',          'xkmNi280NkrcY',
            'PWT8AptmKh7TW',          'k8j7MHfOQYW76',
            'J6ctgPvnDpDi0',          'EhoIUEHvnsUMg',
            '13neOEQ2BKK8HC'
    ],


    'Wendy Williams': [
            '3o7aD4GrHwn8vsGBTa',     'F61k24aGaxDaw',
            'alFZL53RPSVNu',          '89dUWardhhNra',
            'HHJ4LDSfbpxa8',          '3o6gbeW79zrP9lUAjC',
            '4rjcEJpI6qfsI',          'do0DADKwjMQ6c',
            '3ohzdLk1rwtCQkRaA8'
    ],


    'The Grand Budapest Hotel': [
            'QfOu7e5kKJ0jK',          'AwRhZ2Qc7ziN2',
            'MCudzuADLuJWw',          '1xjmc74IbNTgs',
            'bhK5E1GM2kw8g',          'AMTM7n1ZezQ9q',
            '3FTje3qkGqSIM',          'rS7tFAFu8PAgE',
            'emVe63B7ASGEU'
    ]
};
