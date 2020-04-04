const express = require('express');

const authMiddleware = require('./middleware/auth');

const { celebrate, Segments, Joi } = require('celebrate');

const UsersController = require('./controllers/UsersController');

const OngController = require('./controllers/OngController');

const IncidentsController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const UserSessionController = require('./controllers/UserSessionController');

const UserProfileController = require('./controllers/UserProfileController');

const RechargeController = require('./controllers/RechargeController');

const OngDonationReceivedController = require('./controllers/OngDonationReceivedController');

const DonationController = require('./controllers/DonationController');

const UserDonationController = require('./controllers/UserDonationController');

const routes = express.Router();

routes.post('/sessions/ong', celebrate({
    [Segments.BODY]: Joi.object({
        id: Joi.string().required(),
    }).keys(),
}),SessionController.create);

routes.post('/sessions/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        uName: Joi.string().required(),
        userPass: Joi.string().required()
    })
}), UserSessionController.create);



routes.get('/ongs', OngController.index);



routes.get('/donation', DonationController.index);
routes.get('/donation/ong', celebrate({
    [Segments.HEADERS]: Joi.object({
        ongname: Joi.string().required(),
    }).unknown(),
}), OngDonationReceivedController.index);

routes.get('/donation/user', celebrate({
    [Segments.HEADERS]: Joi.object({
        username: Joi.string().required(),
    }).unknown(),
}), UserDonationController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        ongname: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
        password: Joi.string().required()
    }),
}), OngController.create);

routes.delete('/ongs/:id', OngController.delete);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentsController.index);

routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required(),
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        
    })
}), UsersController.create);

routes.get('/users', UsersController.index);



routes.use(authMiddleware);

routes.post('/donate/:id',celebrate({
    [Segments.HEADERS]: Joi.object({
        username: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]:Joi.object().keys({
        donation: Joi.number().required(),
    })
}),DonationController.create);

routes.get('/profile/user', celebrate({
    [Segments.HEADERS]: Joi.object({
        username: Joi.string().required(),
    }).unknown(),
}), UserProfileController.index);

routes.get('/profile/ong', celebrate({
    [Segments.HEADERS]: Joi.object({
        ong_id: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.put('/recharge',celebrate({
    [Segments.HEADERS]: Joi.object({
        username: Joi.string().required(),
        
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        value: Joi.number().required(),
    })
}),  RechargeController.update);

routes.get('/recharge/list', celebrate({
    [Segments.HEADERS]: Joi.object({
        username: Joi.string().required(),
    }).unknown(),
}), RechargeController.index);



routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        ong_id: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), IncidentsController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete);




module.exports = routes;