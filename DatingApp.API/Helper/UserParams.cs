using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Helper
{
    public class UserParams
    {
        public int PageNumber { get; set; } = 1;
		private int pageSize;

		public int MyProperty
		{
			get { return pageSize; }
			set { pageSize = value; }
		}

	}
}
