# moment-nools

This is a fork of https://github.com/moment/moment with a workaround for https://github.com/medic/medic-conf/issues/225. This is due to [fragile parsing logic](https://github.com/medic/cht-core/issues/6506) in the deprecated project [nools](https://github.com/noolsjs/nools).
It is useful for applications using legacy versions of the CHT Core Framework that want to use the moment library.